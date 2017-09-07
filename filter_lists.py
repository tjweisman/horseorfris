import pickle

with open("tctlist", 'r') as hfi:
    hlist = pickle.load(hfi)

with open("tnames", 'w') as hfi:
    for name, url in hlist:
        print(name)
