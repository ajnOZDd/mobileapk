import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonButton } from '@ionic/react';
import { RouteComponentProps } from 'react-router';
import { useHistory } from 'react-router-dom';
import './TeamDetailPage.css';



interface Player {
  id: number;
  name: string;
  position: string;
  points: number;
  rebound: number;
  assists: number;
  // ... Autres détails du joueur
}

interface TeamDetailPageProps extends RouteComponentProps<{ teamId: string }> {}

const TeamDetailPage: React.FC<TeamDetailPageProps> = ({ match }) => {
  const history = useHistory();
  const players: Player[][] = [
    [], // Équipe 0 (index 0)
    [
        { id: 1, name: 'Kevin', position: 'Guard', points: 12, rebound: 33, assists: 43 },
        { id: 2, name: 'Heart', position: 'Meneur', points: 8, rebound: 20, assists: 35 },
        { id: 3, name: 'Dwayne', position: 'Arrière', points: 18, rebound: 15, assists: 28 },
        { id: 4, name: 'Anthony', position: 'Ailier', points: 25, rebound: 10, assists: 12 },
        { id: 5, name: 'Chris', position: 'Pivot', points: 10, rebound: 28, assists: 5 },
      
    ],
    [
        { id: 6, name: 'Stephen', position: 'Guard', points: 15, rebound: 25, assists: 30 },
        { id: 7, name: 'Klay', position: 'Meneur', points: 10, rebound: 18, assists: 22 },
        { id: 8, name: 'Draymond', position: 'Arrière', points: 8, rebound: 12, assists: 20 },
        { id: 9, name: 'Andrew', position: 'Ailier', points: 22, rebound: 30, assists: 15 },
        { id: 10, name: 'DeMarcus', position: 'Pivot', points: 28, rebound: 22, assists: 10 },
      
    ],
    // ... Autres équipes
  ];

  const teamId = parseInt(match.params.teamId, 10);
  const teamPlayers = players[teamId];
  const handleBack = () => {
    history.push('/home'); // Remplacez '/home' par le chemin de votre page d'accueil
  };
  const handlePlayerClick = (teamId: number, playerId: number) => {
    history.push(`/team/${teamId}/player-stats/${playerId}`);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Liste des joueurs</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <IonButton onClick={handleBack}>Retour </IonButton>
      <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Nom</th>
                <th>Position</th>
                <th>Points</th>
                <th>Rebonds</th>
                <th>Assist</th>

                {/* Ajoutez d'autres en-têtes de colonne pour d'autres statistiques */}
              </tr>
            </thead>
            <tbody>
              {teamPlayers.map((player) => (
                <tr key={player.id}>
                  <td>{player.name}</td>
                  <td>{player.position}</td>
                  <td>{player.points}</td> {/* Remplacez par la valeur réelle */}
                  <td>{player.rebound}</td>
                  <td>{player.assists}</td>
                  {/* Remplacez par la valeur réelle */}
                  {/* Ajoutez d'autres cellules pour d'autres statistiques */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    
      </IonContent>
    </IonPage>
  );
};

export default TeamDetailPage;
