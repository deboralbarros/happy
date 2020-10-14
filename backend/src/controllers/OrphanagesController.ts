import { Request, Response } from "express";
import { getRepository } from "typeorm";
import * as Yup from "yup";

import orphanageView from "../views/OrphanagesView";

import Orphanages from "../models/Orphanage";

export default {
  async index(req: Request, res: Response) {
    const orphanagesRepository = getRepository(Orphanages);

    const orphanages = await orphanagesRepository.find({
      relations: ["images"],
    });

    return res.json(orphanageView.renderMany(orphanages));
  },

  async show(req: Request, res: Response) {
    const { id } = req.params;

    const orphanagesRepository = getRepository(Orphanages);

    const orphanage = await orphanagesRepository.findOneOrFail(id, {
      relations: ["images"],
    });

    return res.json(orphanageView.render(orphanage));
  },

  async create(req: Request, res: Response) {
    const {
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
    } = req.body;

    const orphanagesRepository = getRepository(Orphanages);

    const reqImgs = req.files as Express.Multer.File[];

    const images = reqImgs.map((image) => {
      return { path: image.filename };
    });

    const data = {
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends: open_on_weekends === 'true',
      images,
    };

    const schema = Yup.object().shape({
      name: Yup.string().required("Informação obrigatória"),
      latitude: Yup.number().required("Informação obrigatória"),
      longitude: Yup.number().required("Informação obrigatória"),
      about: Yup.string().required("Informação obrigatória").max(300),
      instructions: Yup.string().required("Informação obrigatória"),
      opening_hours: Yup.string().required("Informação obrigatória"),
      open_on_weekends: Yup.boolean().required("Informação obrigatória"),
      images: Yup.array(
        Yup.object().shape({
          path: Yup.string().required("Informação obrigatória"),
        })
      ),
    });

    const finalData = schema.cast(data);

    await schema.validate(data, {
      abortEarly: false,

    });

    const orphanage = orphanagesRepository.create(data);

    await orphanagesRepository.save(orphanage);

    return res.status(201).json(orphanage);
  },
};
