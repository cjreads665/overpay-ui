import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import cookieParser from 'cookie-parser';

const app = express();
/***
 * Use this middleware when you expect clients to send JSON-formatted data (e.g., via Content-Type: application/json headers).
 * it parses incoming json payloads from the http requests and make the parsed data available on req.body
 */
app.use(express.json()); 
app.use(cookieParser());
app.use(cors());