import React from "react";
import CategoriesPage from "../../components/template/CategoriesPage";

const Categrories = ({ data }) => {
  console.log({ data });
  return <CategoriesPage data={data} />;
};

export default Categrories;

export async function getServerSideProps(context) {
  const {
    query: { difficulty, time },
  } = context;
  const res = await fetch(`${process.env.BASE_URL}/data`);
  const data = await res.json();
  const filterData = data.filter((item) => {
    const difficultyResualt = item.details.filter(
      (detail) => detail.Difficulty && detail.Difficulty === difficulty
    );
    const timeResualt = item.details.filter((detail) => {
      const cookingTime = detail["Cooking Time"] || "";
      const [timeDetail] = cookingTime.split(" ");
      if (time === "less" && timeDetail && +timeDetail <= 30) {
        return detail;
      } else if (time === "more" && timeDetail && +timeDetail >= 30) {
        return detail;
      }
    });
    if (time && difficulty && timeResualt.length && difficultyResualt.length) {
      return item;
    } else if (
      (!time && difficulty && difficultyResualt.length) ||
      (!difficulty && time && timeResualt.length)
    ) {
      return item;
    }
  });
  return {
    props: { data: filterData },
  };
}
