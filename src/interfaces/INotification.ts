export interface INotification {
    id: number;
    title: string;
    message: string;
    time: string;
    read: boolean;
    avatar?: string;  // Facultatif : avatar de l'utilisateur
}