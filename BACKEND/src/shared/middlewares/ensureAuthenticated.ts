import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { AppError } from "../error/AppError";

interface IPayload {
    id: string;
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction): void {

    const token = request.headers.authorization?.split(" ")[1]; // lol lol Espera-se o token no formato "Bearer token"

    if (!token) {
        throw new AppError("Token missing", 401);
    }


    jwt.verify(token, process.env.JWT_SECRET_KEY as string, (err, decoded: IPayload | undefined) => {
        if (err) {
            throw new AppError("Invalid token", 401);
        }

        if (decoded) {
            request.id = decoded?.id;
            next();
        } else {
            throw new AppError("Invalid token", 401);
        }
    });
}
