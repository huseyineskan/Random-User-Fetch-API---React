# Random User Fetch API React

Random user fetch API react project

## Description

The project uses the free API https://randomuser.me/api/. A new random user is drawn with the "New User" button added to the interface.

## Screenshot

![Uygulama Ekran Görüntüsü](https://github.com/huseyineskan/Rock-Paper-Scissors-Game/blob/main/screenshot.png)

### Features that can be added

- With certain filters, users who meet the desired criteria can be attracted.
- Depending on the person's country, flag colors can be reflected in the design.

### Example Response

```
{
    "results": [
        {
            "gender": "male",
            "name": {
                "title": "Monsieur",
                "first": "Burim",
                "last": "Roger"
            },
            "location": {
                "street": {
                    "number": 57,
                    "name": "Rue Barrème"
                },
                "city": "Astano",
                "state": "Appenzell Innerrhoden",
                "country": "Switzerland",
                "postcode": 9445,
                "coordinates": {
                    "latitude": "-63.2601",
                    "longitude": "-178.0261"
                },
                "timezone": {
                    "offset": "+5:45",
                    "description": "Kathmandu"
                }
            },
            "email": "burim.roger@example.com",
            "login": {
                "uuid": "2eb06017-441a-40aa-92c6-bcc6fd91ec17",
                "username": "silvergorilla724",
                "password": "blazers",
                "salt": "sreNaMO2",
                "md5": "e1c670b7117910f8ed47746c97dc2b97",
                "sha1": "2f72c1625df3c2262b807fe6fb76e84e4e8cebfd",
                "sha256": "1f61d11f62030577652103d966ffb8944beb65dcfc6354b24e76bcbcef1dcb96"
            },
            "dob": {
                "date": "1988-12-11T08:58:02.239Z",
                "age": 35
            },
            "registered": {
                "date": "2018-03-26T23:18:56.120Z",
                "age": 6
            },
            "phone": "079 618 81 41",
            "cell": "075 766 17 32",
            "id": {
                "name": "AVS",
                "value": "756.5307.7585.50"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/40.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/40.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/40.jpg"
            },
            "nat": "CH"
        }
    ],
    "info": {
        "seed": "986bbc7e15af6f7f",
        "results": 1,
        "page": 1,
        "version": "1.4"
    }
}
```
