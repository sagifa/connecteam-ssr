import React from "react";

type ShowHtmlProps = {
  htmlTags: string;
  color?: string;
  align?: string;
};
const ShowHtml = ({ htmlTags, color, align }: ShowHtmlProps) => {
  const htmlWithBreakLine = htmlTags.replaceAll("</p>", "</p><br/>");
  return (
    <div
      dangerouslySetInnerHTML={{ __html: htmlWithBreakLine }}
      style={{
        fontFamily: "Inter",
        fontWeight: "500",
        fontSize: "19px",
        lineHeight: "23px",
        color: color || "#6A6A6A",
        display: "flex",
        justifyContent: align || "start",
      }}
    />
  );
};

export default ShowHtml;
