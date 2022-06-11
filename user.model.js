function User(id, nom, prenom) {
    this.id = id;
    this.lastName = nom;
    this.firstName = prenom;
}


User.toJson = (object) => {
    return new User(object.id, object.firstName, object.lastName);
}

module.exports = { User : User }