import React from "react";
import Navbar from "../components/Navbar";
import SectionLayout from "../components/SectionLayout";
import Post from "../components/Post";
import { GraphQLClient, gql } from "graphql-request";

const token =
  "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE3NDg0ODA4ODUsImF1ZCI6WyJodHRwczovL2FwaS1hcC1zb3V0aC0xLmh5Z3JhcGguY29tL3YyL2NtYjU0dmkwazAyZWowOHdicmpjYmNiY3kvbWFzdGVyIiwibWFuYWdlbWVudC1uZXh0LmdyYXBoY21zLmNvbSJdLCJpc3MiOiJodHRwczovL21hbmFnZW1lbnQtYXAtc291dGgtMS5oeWdyYXBoLmNvbS8iLCJzdWIiOiJmNWIzMjFjYy0zMDE1LTRjNDYtOTdmMi05Mzg3MmRjNzE2YzciLCJqdGkiOiJjbWI4b2RoaHIwMjF3MDdvNDR5NHBjOHAyIn0.tppBOVbvVG4irprjx5ZGcDnjdzNIRXj4Je_C8dTa3wdN4NG3Lcl6vIgqAO8RsoBkb6Tw8bBSXR78Vbg5DLhEAhEKnRhFLOKaM97b6r4ATtUv_BuJxsB4vfZ2JxR7HcLtc47Xf4rc0ivh1a2tM7jvJLhMELHEG432hghQ51IpZOThv57aP_UT37HluLiIQeu_TrpUV586CIf_7HcWo8IspibK2my32RhoT6VoZsQXeKLBtzMps5hQRZowF9f9XoO3AqCz41oHPjpUjNB-JzyVX-2yHgznx2wsQtM6byeZMZgMgcjyXyQtzCfTQA1Unh6Wc-bnd2WtgMbFBpYPyirwBuCelFQ5JiRcB_YBd_bUwcQ68r8lxx6Cj8jrxH7FgFuBrc58UyAlZKA9jSBZLKjbGKrmrd1BEZtqEQ7HaNG_EgYw7wuSMmX-CaITW7sG5gsJE0-6zEJl7epNrStIPQjhhBUPZfEYG8RQBhsz0xMjI6mgdAyRgrigLuNkPSUcfpVcksUZmwN3v9AGIbyO5dHvso4j2N2deaQa4H6fsjD7teuK6-3zaa8v2SVAG-fx8tmQweMSt78NgIskMTGZQpl6zrrcHzdX4d7qGiGB5fVkz7-Jpt24X42O6rqPj7AFGV19K0yDDN8zfiCaM7KiBAkttIhD3cRfwn_ALv3x8RPfvtg";
const graphcms = new GraphQLClient(
  "https://ap-south-1.cdn.hygraph.com/content/cmb54vi0k02ej08wbrjcbcbcy/master",
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
);

const QUERY = gql`
  {
    posts {
      id
      title
      content
      author {
        title
        avatar {
          url
        }
      }
      image {
        url
      }
      teaser
    }
  }
`;

export default async function Page() {
  const posts: any = await graphcms.request(QUERY);

  return (
    <>
      <SectionLayout>
        <Navbar></Navbar>
        <Post posts={posts.posts}></Post>
      </SectionLayout>
    </>
  );
}
