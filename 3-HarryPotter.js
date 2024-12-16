//! ** You should not modify HTML codes.
//? The photos are duplicated and wrong. :((
// todo1: please go and find a picture for each character that mentioned in cards in HarryPotter.html .
// todo2: assign the picutre of each character to it's card.

/**WRITE CODE BELOW */

const characterImages = {
    "Harry-Potter": "https://www.google.com/search?sca_esv=6caab9b62c604d94&sxsrf=ADLYWIK2FGvCkdXTF40cO7SaHsIrEC_xPw:1734334341386&q=harry+potter&udm=2&fbs=AEQNm0Aa4sjWe7Rqy32pFwRj0UkWd8nbOJfsBGGB5IQQO6L3JzWreY9LW7LdGrLDAFqYDH2lNRNVm2fkdfNI8a8MNHxmvbXrori-6cOZMaYKhgHilHf5JehfU6eF56jKF9Ny8xxVj9sitHgoIufRX0IZZK6_fUsLs3m9Uehdi1UsWR-I7m-dNOI&sa=X&ved=2ahUKEwjz-9vy4quKAxVeVEEAHbbeLY8QtKgLegQIJBAB&biw=960&bih=879&dpr=1", 
    "Hermione-Granger": "https://www.google.com/search?q=hermione-grange&sca_esv=6caab9b62c604d94&udm=2&biw=960&bih=879&sxsrf=ADLYWIIEVb8l64nlHk8dDfcbVlgYxYFcPA%3A1734334344954&ei=iNdfZ6nyOaO2hbIPj5Xj8AQ&ved=0ahUKEwip1rX04quKAxUjW0EAHY_KGE4Q4dUDCBA&uact=5&oq=hermione-grange&gs_lp=EgNpbWciD2hlcm1pb25lLWdyYW5nZTIEEAAYHjIEEAAYHjIEEAAYHjIEEAAYHjIEEAAYHjIEEAAYHjIEEAAYHjIEEAAYHjIEEAAYHjIEEAAYHkj_ElDcA1j-D3ACeACQAQSYAZwCoAGoDKoBAzItNrgBA8gBAPgBAfgBApgCBKAC0gSoAgrCAgoQABiABBhDGIoFwgIGEAAYBxgewgIEECMYJ8ICBxAjGCcY6gKYAwaIBgGSBwUyLjAuMqAHkiw&sclient=img", 
    "Ron-Weasley": "https://www.google.com/search?q=ron+wisley&sca_esv=6caab9b62c604d94&udm=2&biw=960&bih=879&sxsrf=ADLYWIL0tfVJd2zzvB9N-ObUxkLqKAG68w%3A1734334387821&ei=s9dfZ8jsMeedhbIP7ZzR-Q0&ved=0ahUKEwiIku6I46uKAxXnTkEAHW1ONN8Q4dUDCBA&uact=5&oq=ron+wisley&gs_lp=EgNpbWciCnJvbiB3aXNsZXkyChAAGIAEGEMYigUyChAAGIAEGEMYigUyChAAGIAEGEMYigUyChAAGIAEGEMYigUyBxAAGIAEGAoyBxAAGIAEGAoyBxAAGIAEGAoyBxAAGIAEGAoyBxAAGIAEGAoyBxAAGIAEGApI6StQvgJY6ShwAngAkAEEmAHYAqAB8x-qAQYyLTEzLjK4AQPIAQD4AQGYAg2gAsgXqAIKwgIEECMYJ8ICBBAAGB7CAgcQIxgnGOoCwgIFEAAYgASYAwbiAwUSATEgQIgGAZIHBzIuMC45LjKgB_hc&sclient=img", 
    "Severus-Snape": "https://www.google.com/search?q=severus+snape&sca_esv=6caab9b62c604d94&udm=2&biw=960&bih=879&sxsrf=ADLYWIK9FsUvwPQiYu3mBd-K0PMtUr7HIw%3A1734334427521&ei=29dfZ9jAH_ehhbIPwIibcA&oq=severous&gs_lp=EgNpbWciCHNldmVyb3VzKgIIADIKEAAYgAQYQxiKBTIKEAAYgAQYQxiKBTIKEAAYgAQYQxiKBTIHEAAYgAQYCjIHEAAYgAQYCjIHEAAYgAQYCjIHEAAYgAQYCjIHEAAYgAQYCjIHEAAYgAQYCjIHEAAYgAQYCkjlLVCvAlj1IHACeACQAQSYAeMCoAG5IKoBBjItMy4xMLgBAcgBAPgBAZgCC6AC7xeoAgrCAgQQIxgnwgIHECMYJxjqAsICBRAAGIAEmAMG4gMFEgExIECIBgGSBwcyLjAuMS44oAeOUw&sclient=img",
    "Draco-Malfoy": "https://www.google.com/search?q=draco-malfoy&sca_esv=6caab9b62c604d94&udm=2&biw=960&bih=879&sxsrf=ADLYWIIZHL__5a3Eaf3je4IsFxO-C7ShCA%3A1734334452306&ei=9NdfZ4e0EtyohbIPuuXk6Aw&ved=0ahUKEwiH_s2n46uKAxVcVEEAHboyGc0Q4dUDCBA&uact=5&oq=draco-malfoy&gs_lp=EgNpbWciDGRyYWNvLW1hbGZveTIEEAAYHjIEEAAYHjIEEAAYHjIEEAAYHjIEEAAYHjIEEAAYHjIEEAAYHjIEEAAYHjIEEAAYHjIEEAAYHkjeFVDhAliREHACeACQAQSYAaECoAGQDKoBAzItNrgBA8gBAPgBAfgBApgCBKACrASoAgrCAgoQABiABBhDGIoFwgIGEAAYBxgewgIEECMYJ8ICBRAAGIAEwgIHECMYJxjqApgDB4gGAZIHBTIuMC4yoAfoKA&sclient=img",
    "Cedric-Diggory": "https://www.google.com/search?q=Cedric-Diggory&sca_esv=6caab9b62c604d94&udm=2&biw=960&bih=879&sxsrf=ADLYWIIROy8NlF9Ex70NGPLBEl2vicedTw%3A1734334496541&ei=INhfZ8rfILLjxc8PsPe_sAk&ved=0ahUKEwjK79m846uKAxWycfEDHbD7D5YQ4dUDCBA&uact=5&oq=Cedric-Diggory&gs_lp=EgNpbWciDkNlZHJpYy1EaWdnb3J5MgQQABgeMgQQABgeMgQQABgeMgQQABgeMgQQABgeMgQQABgeMgQQABgeMgQQABgeMgQQABgeMgQQABgeSO0QUMQCWJoOcAJ4AJABBJgB7AKgAawOqgEFMi0yLjS4AQPIAQD4AQH4AQKYAgSgAp8EqAIKwgIGEAAYBxgewgIEECMYJ8ICBxAjGCcY6gKYAwaIBgGSBwUyLjAuMqAH3yU&sclient=img", 
    "Lord-Voldemort": "https://www.google.com/search?q=Lord-Voldemort&sca_esv=6caab9b62c604d94&udm=2&biw=960&bih=879&sxsrf=ADLYWIIH3dGYli19UwBeyi84UYX9orDgCg%3A1734334544616&ei=UNhfZ7GeJdaP7NYPtMDaoAo&ved=0ahUKEwixhtDT46uKAxXWB9sEHTSgFqQQ4dUDCBA&uact=5&oq=Lord-Voldemort&gs_lp=EgNpbWciDkxvcmQtVm9sZGVtb3J0MgQQABgeMgQQABgeMgQQABgeMgQQABgeMgQQABgeMgQQABgeMgQQABgeMgQQABgeMgQQABgeMgQQABgeSNoaUOsCWIAQcAJ4AJABBJgBtgKgAYINqgEFMi00LjK4AQPIAQD4AQH4AQKYAgSgArwEqAIKwgIGEAAYBxgewgIEECMYJ8ICBxAjGCcY6gKYAwaIBgGSBwcyLjAuMS4xoAfjJg&sclient=img", 
    "Bellatrix-Lestrange": "https://www.google.com/search?q=Bellatrix-Lestrange&sca_esv=6caab9b62c604d94&udm=2&biw=960&bih=879&sxsrf=ADLYWILXbUO0SM-CqP5_O134vKvJl-VO4Q%3A1734334579237&ei=c9hfZ96NDq-Mxc8PxtqVmA4&ved=0ahUKEwiek5Hk46uKAxUvRvEDHUZtBeMQ4dUDCBA&uact=5&oq=Bellatrix-Lestrange&gs_lp=EgNpbWciE0JlbGxhdHJpeC1MZXN0cmFuZ2UyBBAAGB4yBBAAGB4yBBAAGB4yBBAAGB4yBBAAGB4yBBAAGB4yBBAAGB4yBBAAGB4yBBAAGB4yBBAAGB5IuSBQkgRY4RZwAngAkAEEmAH0AqABgQ-qAQUyLTIuNLgBA8gBAPgBAfgBApgCBKACtgSoAgrCAgYQABgHGB7CAgQQIxgnwgIHECMYJxjqApgDB4gGAZIHBTIuMC4yoAfJJw&sclient=img" 
};

document.addEventListener("DOMContentLoaded", function() {
    const characterCards = document.querySelectorAll('.card img');
    
    characterCards.forEach(img => {
        const cardId = img.id; 
        
        if (characterImages[cardId]) {
            img.src = characterImages[cardId]; 
            img.alt = img.alt || cardId.replace('-', ' '); 
        }
    });
});