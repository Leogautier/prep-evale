CREATE TABLE piece(
   Id_piece INT AUTO_INCREMENT,
   PRIMARY KEY(Id_piece)
);

CREATE TABLE categorie(
   Id_categorie INT AUTO_INCREMENT,
   PRIMARY KEY(Id_categorie)
);

CREATE TABLE marque(
   Id_marque INT AUTO_INCREMENT,
   Id_categorie INT,
   PRIMARY KEY(Id_marque),
   FOREIGN KEY(Id_categorie) REFERENCES categorie(Id_categorie)
);

CREATE TABLE prix(
   Id_prix INT AUTO_INCREMENT,
   Id_piece INT,
   PRIMARY KEY(Id_prix),
   FOREIGN KEY(Id_piece) REFERENCES piece(Id_piece)
);

CREATE TABLE commande(
   Id_commande INT AUTO_INCREMENT,
   Id_prix INT,
   PRIMARY KEY(Id_commande),
   UNIQUE(Id_prix),
   FOREIGN KEY(Id_prix) REFERENCES prix(Id_prix)
);

CREATE TABLE Asso_2(
   Id_piece INT,
   Id_categorie INT,
   PRIMARY KEY(Id_piece, Id_categorie),
   FOREIGN KEY(Id_piece) REFERENCES piece(Id_piece),
   FOREIGN KEY(Id_categorie) REFERENCES categorie(Id_categorie)
);
