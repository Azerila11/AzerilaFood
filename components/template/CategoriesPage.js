import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "./CategoriesPages.module.css";
import Card from "../modules/Card";

const CategoriesPage = ({ data }) => {
  const router = useRouter();
  const [query, SetQuery] = useState({ difficulty: "", time: "" });
  useEffect(() => {
    const { difficulty, time } = router.query;
    if (query.difficulty !== difficulty || query.time !== time) {
      SetQuery({ difficulty, time });
    }
  }, []);
  return (
    <div className={styles.container}>
      <h2>Categories</h2>
      <div className={styles.subContainer}>
        <div className={styles.select}>
          <select
            value={query.difficulty}
            name="difficulty"
            onChange={(e) => {
              SetQuery({ ...query, [e.target.name]: e.target.value });
            }}
          >
            <option value="">Difficulty</option>
            <option value="Hard">Hard</option>
            <option value="Medium">Medium</option>
            <option value="Easy">Easy</option>
          </select>
          <select
            value={query.time}
            name="time"
            onChange={(e) => {
              SetQuery({ ...query, [e.target.name]: e.target.value });
            }}
          >
            <option value="">Cooking Time</option>
            <option value="more">More Than 30 min</option>
            <option value="less">Less Than 30 min</option>
          </select>
          <button
            onClick={() => {
              router.push({ pathname: "/categories", query });
            }}
          >
            Search
          </button>
        </div>
        <div className={styles.cards}>
          {!data.length ? (
            <img src="/images/search.png" alt="Category" />
          ) : null}
          {data.map((food) => (
            <Card key={food.id} {...food} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
