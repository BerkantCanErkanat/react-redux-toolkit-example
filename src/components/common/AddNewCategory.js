import React, { useState } from "react";
import { Form, Button } from "reactstrap";
import {
  useAddNewCategoryMutation,
  useGetCategoriesQuery,
} from "../../services/api";
import { useNavigate } from "react-router-dom";
import { FormGroupElement } from "./FormGroupElement";
//onChange burda yazıcan ve ana state e koydugun seyleri burada tanımla. burada state degıstıkce renderlancagı ıcın
//hatayı falan isValidleri burdan ver ona gore ana state ıle calısma onChange burda yazıldıgı icin tıklansa da burdaki fonk calıscak
export function AddNewCategory() {
  const [addNewCategory] = useAddNewCategoryMutation();
  const { data } = useGetCategoriesQuery();
  const navigate = useNavigate();
  const [formGroupInfo, setFormGroupInfo] = useState({
    categoryName: {
      value: "",
      isValid: null,
      reasonForInvalid: "",
    },
    seoUrl: {
      value: "",
      isValid: null,
      reasonForInvalid: "",
    },
  });

  const handleInputChange = (e) => {
    let inputValue = e.target.value;
    let inputName = e.target.name;
    let existCheckData = data;
    let fieldToFind = inputName;
    if (inputValue.trim() === "") {
      setFormGroupInfo((prev) => ({
        ...prev,
        [inputName]: {
          value: inputValue,
          isValid: false,
          reasonForInvalid: "empty",
        },
      }));
    } else {
      let elementExists = existCheckData.find(
        (element) => element[fieldToFind] === inputValue
      );
      console.log(elementExists);
      if (elementExists) {
        setFormGroupInfo((prev) => ({
          ...prev,
          [inputName]: {
            value: inputValue,
            isValid: false,
            reasonForInvalid: "elementExists",
          },
        }));
      } else {
        setFormGroupInfo((prev) => ({
          ...prev,
          [inputName]: {
            value: inputValue,
            isValid: true,
            reasonForInvalid: "",
          },
        }));
      }
      console.log(formGroupInfo);
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    let categoryNameValid = formGroupInfo.categoryName.isValid;
    let seoUrlValid = formGroupInfo.seoUrl.isValid;
    if (categoryNameValid && seoUrlValid) {
      addNewCategory({
        categoryName: formGroupInfo.categoryName.value,
        seoUrl: formGroupInfo.seoUrl.value,
      })
        .unwrap()
        .then(() => {})
        .then((error) => {
          console.log(error);
        });
      navigate("/", { replace: true });
    } else {
      alert("Oops! something went wrong");
    }
  };

  return (
    <div>
      <Form inline onSubmit={onSubmitHandler}>
        <FormGroupElement
          formGroupInfo={formGroupInfo.categoryName}
          inputId="categoryName"
          inputName="categoryName"
          inputPlaceholder="Category Name"
          inputType="text"
          onChange={handleInputChange}
        />
        <br></br>
        <FormGroupElement
          formGroupInfo={formGroupInfo.seoUrl}
          inputId="seoUrl"
          inputName="seoUrl"
          inputPlaceholder="Seo Url"
          inputType="text"
          onChange={handleInputChange}
        />
        <Button>Submit</Button>
      </Form>
    </div>
  );
}
