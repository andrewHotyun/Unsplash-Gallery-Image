import React, { useState } from "react"
import { Spinner } from "../../components/Icons/Icons"
import HomeSettings from "../../Settings/home"
import ImageLists from "../../components/ImageLists/ImageLists"
import {
  Homecontainer
} from "./styles"

const Home = () => {
  const initialHomeState = {
    data: { photos: [] },
    page: 1,
    loading: true,
    hasMore: true,
  }

  const [state, setState] = useState(initialHomeState)

  const loadPhotos = async () => {
    const { page } = state
    await HomeSettings.getPhotos({ page })
      .then(({ data }) => {
        setState({
          data: { photos: state.data.photos.concat(data) },
          page: page + 1,
          loading: false,
          hasMore: true,
        })
      })
      .catch((err) => alert(err))
  }

  return (
    <Homecontainer>
    <ImageLists
      loadMore={loadPhotos}
      hasMore={state.hasMore}
      loader={<Spinner size="2x" key={0} />}
      threshold={1000}
      photos={state.data.photos}
      classname="main"
      
    />
    </Homecontainer>
  )
}

export default Home
