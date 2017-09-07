from selenium import webdriver
from selenium.webdriver.support.select import Select

import pickle

def main():    
    driver = webdriver.Chrome()

    driver.get("http://play.usaultimate.org/teams/events/rankings/")


    ddown = Select(
        driver.find_element_by_id("CT_Main_0_F_CompetitionLevelId"))

    ddown.select_by_visible_text("Club")
    
    submit = driver.find_element_by_id("CT_Main_0_btnSubmit")
    submit.click()

    index = 0

    while True:
        table = driver.find_element_by_id("CT_Main_0_gvList")
        teams = table.find_elements_by_tag_name("a")
        team_links = [(team.text, team.get_attribute("href"))
                      for team in teams]

        #filter out navlinks
        team_links = [(name, link) for name, link in team_links
                      if "javascript" not in link]

        with open("tctnames{}".format(index), "w") as fi:
            pickle.dump(team_links, fi)

        index += 1
        
        next_page = driver.find_element_by_partial_link_text("Next 20")
        next_page.click()

main()
