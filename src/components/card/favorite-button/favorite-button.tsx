import React, { useState } from "react";

import styled from "styled-components";
import favoriteIcon from "../../../../assets/images/icons/heart-icon.svg";
import filledFavoriteIcon from "../../../../assets/images/icons/filled-heart-icon.svg";

/* eslint-disable-next-line */
export type FavoriteButtonProps = {};

const StyledFavoriteButton = styled.div`
  .label {
    background: var(--truewhite);
    color: var(--neutral-800);
    width: 24px;
    height: 24px;
    border-radius: 18px;
    align-items: center;
    justify-content: center;
    display: flex;
    font-size: 12px;
    line-height: 24px;
    font-weight: 500;
    cursor: pointer;
  }
`;

export const FavoriteButton = ({}: FavoriteButtonProps) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const setFavorite = () => {
    setIsFavorite(isFavorite ? false : true);
  };
  return (
    <StyledFavoriteButton>
      <div className="label">
        {isFavorite ? (
          <img
            src={filledFavoriteIcon}
            onClick={setFavorite}
            alt="Favorite Icon"
            width="12px"
            height="12px"
          />
        ) : (
          <img
            src={favoriteIcon}
            onClick={setFavorite}
            alt="Favorite Icon"
            width="12px"
            height="12px"
          />
        )}
      </div>
    </StyledFavoriteButton>
  );
};

export default FavoriteButton;
