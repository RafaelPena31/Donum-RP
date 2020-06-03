import React from "react";
import Iphone from "../Iphone";
import Text from "../../atoms/Text";
import Title from "../../atoms/Title";

export const ArticleMain = () => (
  <article id="container">
    <div id="adaptation">
      <article id="article-txt">
        <Title id="title" title="WHO?" />
        <Text
          id="txt"
          title="Magna in labore ullamco sit nisi amet laborum est velit aute et eu labore. Excepteur deserunt 
            deserunt quis esse adipisicing cupidatat id fugiat amet ipsum aliqua id aute nisi. Sunt nisi Lorem nisi nisi aute labore. 
            Cupidatat commodo nisi ut id. Voluptate sunt labore non ad proident nulla fugiat esse quis magna."
        />
        <Title id="title" title="HOW?" />
        <Text
          id="txt"
          title="Magna in labore ullamco sit nisi amet laborum est velit aute et eu labore. Excepteur deserunt 
            deserunt quis esse adipisicing cupidatat id fugiat amet ipsum aliqua id aute nisi. Sunt nisi Lorem nisi nisi aute labore. 
            Cupidatat commodo nisi ut id. Voluptate sunt labore non ad proident nulla fugiat esse quis magna."
        />
      </article>
      <Iphone />
    </div>
  </article>
);
