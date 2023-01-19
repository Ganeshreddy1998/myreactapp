import styled from "@emotion/styled";
import React from "react";
import CommonlyBookedTest from "./CommonlyBookedTest/CommonlyBookedTest";
import SearchBar from "../../components/molecules/SearchBar/SearchBar";
import BookNowContainer from "../../components/organisms/BookNowContainer/BookNowContainer";
import HeadingLinkLayout from "../../components/organisms/HeadingLinklayout/HeadingLinkLayout";
// import { SearchBar } from '../../components/homepage/search.bar'
import Navbar from "../../components/organisms/Navbar/Navbar";
import Gutter from "../../components/templates/Gutter";
import WhyChooseUs from "./WhyChooseUs";

const InnerRoot = styled.div`
  width: 100%;
  margin: 40px 0;
`;

const Homepage = () => {
  return (
    <div>
      <Gutter>
        <InnerRoot>
          <SearchBar placeholder="Search for lab test, packages" />
          <BookNowContainer
            title="60% off on your first order"
            subTitle="Your health is our priority"
            buttonText="Book now"
            buttonLink="/book"
            imageUrl="/images/family.png"
          />
          <CommonlyBookedTest />
        </InnerRoot>
      </Gutter>
      <WhyChooseUs />
    </div>
  );
};

export default Homepage;
