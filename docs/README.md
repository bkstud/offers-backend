<span style="font-size:12px;font-family: 'Times New Roman'">
<h1>Identyfikacja zagadnienia biznesowego</h1>
Projekt częściowo zaspokaja potrzebę realizacji strony internetowej umożliwiającej dowolnej instytucji lub osobie ogłaszanie oraz branie udziału w przetargach finansowych. <br>
Dostarcza takie funkcjonalności biznesowe jak:
<li> Możliwość dodania nowego przetargu z określonym budżetem, opisem, nazwą, podmiotem organizującym oraz ramami czasowymi
<li> Możliwość przeglądania aktualnych przetragów
<li> Możliwość przeglądania zakończonych przetargów
<li> Możliwość składania ofert do aktualnych przetargów
<li> Możliwość wyświetlenia rozstrzygnięcia (lub informacji o braku) zakończonego przetargu

<br>
Aplikację można uznać za częściowe rozwiązanie, które należałoby rozszerzyć o opcje logowania konkretnych użytkowników/instytucji.<br>
Użytkownicy powinni posiadać odpowiednie role oraz uprawnienia, które dostarczyłyby między innymi takie funkcjonalności jak:
<li> Przypisanie nazwy użytkownikowi przy pomocy, której może zgłosić przetarg lub ofertę
<li> Rola admina pozwalająca wyświetlić i edytować wszystkie informacje
<br><br>

<h1>Wymagania systemowe i funkcjonalne</h1>
<li> Aplikacja ma realizować architekture REST API, MVC. <br>
Wymagania funkcjonalne:
<li> Aplikacja powinna automatycznie dostrzec zakończenie aktualnego przetargu i od tego momentu wyświetlać go w zakładce zakończone
<li> Aplikacja powinna nie pozwolić użytkownikowi na złożenie oferty do zakończonego przetargu
<li> Aplikacja powinna nie pozwolić użytkownikowi przeglądania wyników ofert dla niezakońćzonego przetragu
<li> Aplikacja powinna informować użytkownika o sukcesie lub porażce wykonanej akcji takiej jak dodawanie przetargu/oferty wyświetlanie informacji w przypadku np. błędu po stronie serwera backendowego.
<li> Aplikacja powinna zabronić tworzenia przetargów z pustymi-wymaganymi z punktu widzenia biznesu polami np. budżetem.

Baza danych:
<li>Bazy danych powinny być przechowywane po stronie REST serwera
<li>Modele obiektów model przetargu oraz oferty w schemacie jeden do wielu:<br>
<img src="./models.png" alt="alt text" title="image Title" />

<h1>Analiza zagadnienia i jego modelowanie</h1>
<h2>Warstwy aplikacji backendowej</h2>
<img src="./backendflow.png" alt="alt text" title="image Title" />
<li>1. Użytkownik wykonuje zapytanie restowe, które zostaję obsłużone przez serwer (np. GET /api/v1/tender/actual)
<li>2. Odpowiednio zdefiniowana ścieżka woła handler, który obsłuży zapytanie restowe z jego json body i ew. parametrami ścieżki
<li>3. Handler używając metod controllerów żąda informacji np. o aktualnych przetargach
<li>4. Controller wykożystuje metody ORMowe dostępne dla konkretnych modeli zdefiniowane przez bibliotekę <b>Sequelize</b> (np. findaAll z dodatkowymi kondycjami o czasie zakończenia przetargu)
<li>5. Controller zwraca Promise żądanej metody ORMowej
<li>6. Handler czeka na dane (lub bład/wyjątek) i odpowiednio je obsługuję zawierając logikę biznesową.
<li>7-8. Handler przygotowuję odpowiedne dane w formacie json razem ze status HTTP informującym o sukcesie lub błedzie operacji.
<h1>Podsumowanie</h1>
</span>