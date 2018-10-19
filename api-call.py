# This script requires the installation of the requests library: http://docs.python-requests.org/en/master/user/install/

import requests
import json

pokemon = []

for i in range(1, 11):
    apiRequest = 'https://pokeapi.co/api/v2/pokemon/' + str(i)
    r = requests.get(apiRequest)
    pokemon.append(r.json())
    # This is no fun to debug with a log statement
    # print(r.json()["results"])


with open('pokemon.json', 'w') as outfile:
    json.dump({"pokemon": pokemon}, outfile, indent=2, sort_keys=True)
