import { Outlet } from "react-router-dom"
import Footer from "./Footer/Footer"
import Header from "./Header/Header"
import { useEffect } from "react"
import { getPbImageURL } from "@/utils/getPbImageURL"
import pb from "@/api/pocketbase"

let mounted = false
const getFoods = async () => {
  const foods = await pb.collection("foods").getFullList()
  for (const food of foods) {
    if (!food.imageURL) {
      const imageURL = getPbImageURL(food, "image")
      // console.log(imageURL);
      await pb.collection("foods").update(food.id, {
        imageURL,
      })
    }
  }
}

function RootLayout() {
  useEffect(() => {
    if (!mounted) {
      getFoods()
      mounted = true
    }
  }, [])

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default RootLayout
