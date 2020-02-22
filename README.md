# warsawjs-workshop-43
WarsawJS Workshop#43

## slides - live
  - https://slides.com/danielkarski/walidacja-warsztatu/live

## Aplikacja

### Zadania
1. Wydziel z głównego skryptu aplikacji app.js mniejsze moduły np wykorzystując module pattern bazujący na IIFE albo ECMAScript Module
1. Dodaj funkcje zwrotne głównym pliku app.js. Obsłuż:
    - dodanie nowej notatki
    - zmiane tytułu notatki (event: change)
    - zmiane głównego kontentu notatki (event: change)
    - zmiane stanu aktywnej notatki z listy notatek
1. Zaciągnij liste notatek z serwera wykorzystująć fetchAPI
    - wyświetl główne okno alpikacji dopiero po zaciągnieciu notatek
    - dokumentacja API https://documenter.getpostman.com/view/2154709/Szf6WTUS?version=latest
    - zwróć uwagę, by podać parametr userId w adresie https://api.luck.org.pl/api/v2/notes?userId=dkarski
    - API zwraca zawsze pustą liste z inicjalną notatką , gdy nie zna `userId`
1. Obsłuż dodanie nowej notatki za pomocą API
    - zwróć uwagę, by dodać userId do body notatki
1. Obsłuż zmiane tytułu i notatki za pomocą API

### Dodatkowo
1. Wydziel metody do komunikacji z serwerem do osobnego modułu
1. Wydziel główny szablon aplikacji do osobnego modułu
1. Dodaj setInterval do za symulowania automatycznego zapisu notatki
    - możesz przed wysłaniem żądania sprawdzić, czy notatka się zmieniła z stanem poprzednim
    
### Postman API documentation
  - https://documenter.getpostman.com/view/2154709/Szf6WTUS?version=latest
