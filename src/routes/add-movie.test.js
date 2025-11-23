// src/routes/add-movie.test.js

import { describe, it, expect } from "vitest";
import request from "supertest";
import express from "express"
import addMovieRouter from "./add-movie.js"

const router = express()
router.use(express.json())
router.use(addMovieRouter)

describe("GET /add-movie", () => {

  it("returns movies and does not add anything", async () => {
    const res = await request(router).get("/")

    expect(res.status).toBe(200)
    expect(res.body.ok).toBe(true)
    expect(res.body.message).toBe("Nothing added")
  })

})


describe("Server Routes", () => {

  it("add new movie", async () => {
    const res = await request(router)
      .post("/")
      .send({
        "id": 13,
        "imdb_id": "tt9603208",
        "title": "Mission: Impossible - The Final Reckoning",
        "year": 2025,
        "runtime": "2:52:54",
        "rating": "PG-13",
        "poster": "https://image.tmdb.org/t/p/original/z53D72EAOxGRqdr7KXXWp9dJiDe.jpg",
        "genres": ["Action", "Adventure", "Thriller"]
      })

    const { ok, data } = res.body

    expect(res.status).toBe(200)
    expect(ok).toBe(true)
    expect(data).toMatchObject({
      "id": 13,
      "imdb_id": "tt9603208",
      "title": "Mission: Impossible - The Final Reckoning",
      "year": 2025,
      "runtime": "2:52:54",
      "rating": "PG-13",
      "poster": "https://image.tmdb.org/t/p/original/z53D72EAOxGRqdr7KXXWp9dJiDe.jpg",
      "genres": ["Action", "Adventure", "Thriller"]
    })
    expect(data.id).toBeDefined()
  })

})

