import { useRouter } from 'next/router'
import React from 'react'
import Seo from '../../component/Seo';

export default function Detail({params}) {
  const router = useRouter();
  console.log(router);
  const [title,id] = router.query.params||params;
  return (
    <div>
      <Seo title={title}></Seo>
        <h4>{title}</h4>
    </div>
  )
}

export function getServerSideProps({params:{params}}){

  return {
    props:{params}
  }
}