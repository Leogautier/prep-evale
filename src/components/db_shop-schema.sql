CREATE TABLE article(
   Id_article INT AUTO_INCREMENT,
   Title VARCHAR(255),
   Price DOUBLE,
   PRIMARY KEY(Id_article)
);

CREATE TABLE Compte(
   Id_Compte INT AUTO_INCREMENT,
   login VARCHAR(50),
   Password VARCHAR(255),
   PRIMARY KEY(Id_Compte),
   UNIQUE(login)
);

CREATE TABLE Commande(
   Id_Commande INT AUTO_INCREMENT,
   date_commande DATE,
   référence VARCHAR(50),
   Id_Compte INT,
   PRIMARY KEY(Id_Commande),
   FOREIGN KEY(Id_Compte) REFERENCES Compte(Id_Compte)
);

CREATE TABLE Client(
   Id_Client INT AUTO_INCREMENT,
   fullName VARCHAR(255),
   Ville VARCHAR(255),
   Id_Compte INT,
   PRIMARY KEY(Id_Client),
   UNIQUE(Id_Compte),
   FOREIGN KEY(Id_Compte) REFERENCES Compte(Id_Compte)
);

CREATE TABLE contenir(
   Id_article INT,
   Id_Commande INT,
   PRIMARY KEY(Id_article, Id_Commande),
   FOREIGN KEY(Id_article) REFERENCES article(Id_article),
   FOREIGN KEY(Id_Commande) REFERENCES Commande(Id_Commande)
);
