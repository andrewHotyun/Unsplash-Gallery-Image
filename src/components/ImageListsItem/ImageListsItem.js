import React from "react"
import DownloadButton from "../DownloadButton/DownloadButton"
import {
  Item,
  ItemBottomContainer,
  ItemUser,
  ItemUserProfilePicture,
  ItemUserProfileName,
} from "./styles"

const ImageListsItem = (props) => {
  return (
    <Item {...props}>
        <ItemBottomContainer>
        <ItemUser>
          <ItemUserProfilePicture src={props.photo.user.profile_image.medium} alt={props.photo.alt_description} />
          <ItemUserProfileName>{props.photo.user.name}</ItemUserProfileName>
        </ItemUser>
        <DownloadButton download={props.photo.links.download} />
      </ItemBottomContainer>
      <img loading="lazy" src={props.photo.urls.regular} alt="" />
    </Item>
  )
}

export default ImageListsItem
