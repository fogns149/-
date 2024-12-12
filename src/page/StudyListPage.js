import { useEffect, useState } from "react";
import { getStudyItem } from "../api/studyService.js";
import { StudyRecentList } from "../component/StudyRecentList.js";
import { StudyList } from "../component/StudyList.js";
import "./StudyListPage.css";
const DEFAULTPAGE = 1;
const DEFAULTRECENTPAGESIZE = 3;
const DEFAULTPAGESIZE = 6;
const DEFAULTORDER = "recent";
export const StudyListPage = () => {
  const [studyItems, setStudyItems] = useState({ items: [] });
  const [studyRecentItems, setStudyRecentItems] = useState({ items: [] });
  const [studyPage, setStudyPage] = useState(DEFAULTPAGE);
  const [order, setOrder] = useState(DEFAULTORDER);
  const [keyword, setKeyword] = useState("");
  const [numPage, setNumPage] = useState(1);

  useEffect(() => {
    handleLoadStudy({
      page: studyPage,
      pageSize: DEFAULTPAGESIZE,
      order: order,
      keyword: keyword,
    });
    handleLoadRecentStudy({
      page: DEFAULTPAGE,
      pageSize: DEFAULTRECENTPAGESIZE,
      order: DEFAULTORDER,
    });
  }, [order, keyword, studyPage, numPage]);

  const handleLoadStudy = async (Options) => {
    let data = await getStudyItem(Options);
    setStudyItems(data);
  };

  const handleLoadRecentStudy = async (Options) => {
    let data = await getStudyItem(Options);
    setStudyRecentItems(data);
    setNumPage(data.totalCount);
  };

  return (
    <div className="study-list-page">
      <StudyRecentList items={studyRecentItems.list || []}></StudyRecentList>
      <StudyList
        items={studyItems.list || []}
        handleKeyword={setKeyword}
        handleOrder={setOrder}
        page={studyPage}
        handlePage={setStudyPage}
        numPage={numPage}
      ></StudyList>
    </div>
  );
};
