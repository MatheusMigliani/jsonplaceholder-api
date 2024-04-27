import React, { useEffect, useState } from "react";
import {
  IonCard,
  IonContent,
  IonHeader,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { getPosts } from "../services/api";

const Tab1 = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getPosts();
      setPosts(data);
    };

    fetchPosts();
  }, []);

  return (
    <IonPage color={"dark"}>
      <IonHeader color={"dark"}>
        <IonToolbar color={"dark"}>
          <IonTitle className="ion-text-center" color={"success"}>
            Posts
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-text-center">
        {posts.map((post) => (
          <IonCard color={"success"} className="ion-padding">
            <div key={post.id}>
              <IonText color={'dark'}>
              <h2 color="dark">{post.title}</h2>
              <p>{post.body}</p></IonText>
            </div>
          </IonCard>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
