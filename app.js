import data from './data.js'
'use strict'

import process from 'process'

const args = process.argv

function isEmpty(arr) {
    return (Array.isArray(arr) && arr.length)
}

// This function filters out every animal that does not match the string pattern
function removeNonMatching(searchedStr, person) {
    return person.animals.map((animal) => {
        if (animal.name.includes(searchedStr)) {
            return animal;
        }
    }).filter(e => e)
}

function filter(searchedStr) {
    const newList = data.filter(country => {
        let newCountry = country
        newCountry.people = country.people.filter(person => {
            let newPerson = person
            newPerson.animals = removeNonMatching(searchedStr, person)

            // The 'animals' entry will be removed if there is nothing left inside
            return isEmpty(newPerson.animals)
        })

        // The 'people' entry will be removed if there is nothing left inside
        return (isEmpty(newCountry.people))
    });

    // prints out the filtered list if there is any match
    console.log((!isEmpty(newList)) ? 'Nothing found' : JSON.stringify(newList))
    return newList
}

function count() {
    const newList = data.map((country) => {
        country.people.map((person) => {
            person.name = `${person.name} [${person.animals.length}]`
            return person
        })
        country.name = `${country.name} [${country.people.length}]`
        return country
    })
    console.log(JSON.stringify(newList))
    return newList
}

// USAGE: node app.js --filter=[PATTERN] OR node app.js filter=[PATTERN]
// USAGE: node app.js --count OR node app.js count

const cmd = args[2].split("=");
if (cmd[0] === '--filter' || cmd[0] === 'filter') {
    filter(cmd[1])
} else if (cmd[0] === '--count' || cmd[0] === 'count') {
    count()
}
