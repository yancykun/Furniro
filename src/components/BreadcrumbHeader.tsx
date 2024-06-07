import React from "react";
import Header from "./Header";
import ArrowIcon from "../assets/svg/ArrowIcon";
import { useLocation } from "react-router-dom";
import { categories, navigation, products } from "../constants";

const BreadcrumbHeader = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean);

  const breadcrumbItems = [{ title: "Home", url: "/" }];

  if (pathSegments.length > 0) {
    const firstSegment = `/${pathSegments[0]}`;
    const firstNavItem = navigation.find((nav) => nav.url === firstSegment);

    if (firstNavItem && firstSegment !== "/shop") {
      breadcrumbItems.push({
        title: firstNavItem.title,
        url: firstNavItem.url,
      });
    }

    if (pathSegments.length > 1 && firstSegment === "/categories") {
      const secondSegment = `/categories/${pathSegments[1]}`;
      const categoryItem = categories.find((cat) => cat.url === secondSegment);
      if (categoryItem) {
        breadcrumbItems.push({
          title: categoryItem.title,
          url: categoryItem.url,
        });
      }
    }

    if (firstSegment === "/shop" && pathSegments.length > 1) {
      breadcrumbItems.push({
        title: "Shop",
        url: "/shop",
      });

      const productId = pathSegments[1];
      const productItem = products.find((product) => product.id === productId);
      if (productItem) {
        breadcrumbItems.push({
          title: productItem.name,
          url: productItem.url,
        });
      }
    }
  }

  return (
    <div className="relative w-full pt-[3.5rem] md:pt-[5rem]">
      <Header />
      <div className="w-full bg-color-2 px-5 py-10 md:px-20">
        <div className="flex items-center justify-center gap-4 md:justify-start md:gap-8">
          {breadcrumbItems.map((item, index) => (
            <React.Fragment key={index}>
              <p
                className={`font-poppins text-base text-color-5 ${
                  index === breadcrumbItems.length - 1 ? "font-bold" : ""
                }`}
              >
                {item.title}
              </p>
              {index < breadcrumbItems.length - 1 && (
                <ArrowIcon stroke="#000000" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BreadcrumbHeader;
