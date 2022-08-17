import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeCategoryInfo } from "../../slices/categorySlice";
import { useGetCategoriesQuery } from "../../services/api";
import { ListGroupItem, ListGroup,Badge } from "reactstrap";

export function CategoryList() {
  const { data, error, isLoading } = useGetCategoriesQuery(); //tag koydugum ıcın bir query calısırsa o taga sahip digerleri de calıssın
  //yani o querynin kullanıldıgı fonkları calıstır dıyorum o taglar ile api de provided kısmında belırttıgım
  const dispatch = useDispatch();
  const categoryInfo = useSelector((state) => state.category.categoryInfo); //state kullanma redux ile //connect ile de yapıyor
  const [categoryListTitle] = useState("Categories");
  console.log("categorı tarafı calsıtı");
  return (
    <div>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <div>
          <Badge
                color="success"
                pill
              >
                {categoryListTitle}
              </Badge>
            <ListGroup>
              {data.map((category) => (
                <ListGroupItem
                  onClick={() =>
                    dispatch(
                      changeCategoryInfo({
                        name: category.categoryName,
                        id: category.id,
                      })
                    )
                  }
                  key={category.id}
                  action
                  href="#"
                  tag="a"
                  active={
                    category.categoryName === categoryInfo.name ? true : false
                  }
                >
                  {category.categoryName}
                </ListGroupItem>
              ))}
            </ListGroup>
          </div>
        </>
      ) : null}
    </div>
  );
}
