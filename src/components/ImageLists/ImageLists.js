import React from "react"
import InfiniteScroll from "react-infinite-scroller"
import { Spinner } from "../Icons/Icons"
import { Container } from "./styles"

import ImageListsItem from "../ImageListsItem/ImageListsItem"

const ImageLists = (props) => {
  const { loading, photos, loadMore, hasMore, threshold, classname, columnCount } = props
  if (!loading) {
    let row = []

    row = photos.map((photo, i) => <ImageListsItem key={i} alt="placeholder" photo={photo} />)

    return (
      <InfiniteScroll
        loadMore={loadMore}
        hasMore={hasMore}
        loader={<Spinner size="2x" key={0} />}
        threshold={threshold}
        className={classname}
      >
        <Container columnCount={columnCount}>{row}</Container>
      </InfiniteScroll>
    )
  } else {
    return (
      <>
        <Container>
          <Spinner size="2x" />
        </Container>
      </>
    )
  }
}

export default ImageLists
