import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonIcon } from '@ionic/react';
import { useEffect, useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { trash } from 'ionicons/icons';

export interface Todo {
  id: number;
  text: string;
}

const Home: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    async function doFetch() {
      const result = await fetch('/assets/todos.json');
      const data = await result.json();
      setTodos(data)
    }
    doFetch()
  }, [])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ionic React Todos</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer />
      </IonContent>
      <IonContent>
        {
          todos.length === 0 ? (
            <div>No todos, add some!</div>
          ) : (
            <IonList>
              {todos.map((todo, i) => (
                <IonItem key={i}>
                  <IonLabel>
                    <h2>{todo.text}</h2>
                  </IonLabel>
                  <IonIcon data-icon="trash" icon={trash} color="danger" slot="end" />
                </IonItem>
              ))}
            </IonList>
          )
        }
      </IonContent>
    </IonPage>
  );
};

export default Home;
