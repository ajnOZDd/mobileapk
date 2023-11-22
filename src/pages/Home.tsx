import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonImg } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import logo from './logo.jpg';

const NBAListPage: React.FC = () => {
  const history = useHistory();

  const teams = [
    { id: 1, name: 'Lakers', city: 'Los Angeles', idmatch: 0 , score: 110},
    { id: 2, name: 'Warriors', city: 'Golden State',  idmatch: 0 , score: 120 },
    // ... Autres équipes
  ];

  const imageUrl = logo;

  const handleTeamClick = (teamId: number) => {
    history.push(`/team/${teamId}`);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Liste des equipes </IonTitle>
        </IonToolbar>
        <IonImg src={imageUrl} alt="Image de l'équipe" />
      </IonHeader>
      <IonContent>
        <IonList>
          {teams.map((team) => (
            <IonItem key={team.id} onClick={() => handleTeamClick(team.id)}>
              <IonLabel>
                <h2>{team.name}</h2>
                <p>{team.city}</p>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default NBAListPage;
