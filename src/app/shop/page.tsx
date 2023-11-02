import React from "react";
import StoreList from "@/component/StoreList";

const getShopList = async (): Promise<StoreList[]> => {
  const res = await fetch(
    "https://file.notion.so/f/f/b77df62e-dc0e-4c29-a94c-8b223fd241f2/01a9af6f-5de0-4419-af1a-d14f6eb4f489/storeList.json?id=63109521-98be-450d-a323-4942ab7f721a&table=block&spaceId=b77df62e-dc0e-4c29-a94c-8b223fd241f2&expirationTimestamp=1699005600000&signature=_UiIFsmp7W67v7c-Ss-Rcwgs0sjeKJMmnSr2Q9_nlHg&downloadName=storeList.json"
  );
  return await res.json();
};

export interface StoreList {
  sectionTitle: string;
  sectionItems: SectionItem[];
}

export interface SectionItem {
  title: string;
  price: string;
  imageSrc: string;
  tag?: string;
  keywords: string[];
}

export default async function Page() {
  const shopList = await getShopList();

  return (
    <div>
      <StoreList products={shopList} />
    </div>
  );
}
