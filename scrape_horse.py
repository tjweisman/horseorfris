import urllib2
from bs4 import BeautifulSoup
import pickle

years = range(1980, 2018)

horse_list = []

def horse_pair(td, year):
    name = str(td.string)
    a = td.find("a")
    if a is not None and "redlink" not in a.get("href"):
        url = str("https://en.wikipedia.org" + a.get("href"))
    else:
        url = "https://en.wikipedia.org/wiki/{}_Kentucky_Derby".format(year)

    return (name, url)
    
for year in years:

    if year in [2005, 2010, 2011, 2012, 2013]:
        continue

    print year
    page_url = "https://en.wikipedia.org/wiki/{}_Kentucky_Derby".format(year)

    page = urllib2.urlopen(page_url)
    soup = BeautifulSoup(page)

    result_head = soup.find("th", string="Horse").parent
    heads = [th.string for th in result_head.find_all("th")]
    horse_index = heads.index("Horse")

    horse_rows = result_head.parent.find_all("tr")[1:]
    horses = [horse_pair(row.find_all("td")[horse_index],
                         year)
              for row in horse_rows]

    horse_list += horses

horse_dict = {}
for name, url in horse_list:
    horse_dict[name] = url
    
with open("horselist", 'w') as fi:
    pickle.dump(horse_list, fi)

with open("horsedict", 'w') as fi:
    pickle.dump(horse_dict, fi)
    
