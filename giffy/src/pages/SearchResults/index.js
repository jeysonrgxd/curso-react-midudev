import React from 'react'
import ListOfGifs from '../../components/ListOfGifs'
import { useGifs } from '../../hooks/useGifs'

export default function SearchResults(props){
   const {params} = props
   const {keyword} = params
   console.log(keyword);
   const {loading, gifs} = useGifs({keyword})

   return (
      <ListOfGifs loading={loading} gifs={gifs}></ListOfGifs>
   )
}