import { useEffect, useState } from "react";
import { getStudyItem } from "../api/studyService.js";
import { StudyList } from "../component/StudyList.js";

export const StudyListPage = () => {
  const [studyItems, setStudyItems] = useState({});

  useEffect(() => {
    handleLoadStudy();
  }, []);

  const handleLoadStudy = async (Options) => {
    let data = await getStudyItem();
    console.log(data);
    setStudyItems(data);
  };

  return (
    <div>
      <StudyList items={studyItems}></StudyList>
    </div>
  );
};
