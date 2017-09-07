#!/usr/bin/python

import sys
import pickle
import argparse

#Python 2.7 por favor
def parse_args(args):
    parser = argparse.ArgumentParser()

    parser.add_argument("all_names", help="database of name/url pairs to use")
    parser.add_argument("infile", help="list of names to format to a JSON array")
    parser.add_argument("--outfile", "-o", help="output filename")
    parser.add_argument("--type", help="type of data", default="horse")

    return parser.parse_args(args)

def main(args):
    with open(args.all_names, 'r') as datafile:
        data = pickle.load(datafile)

    with open(args.infile, 'r') as namelist:
        oput_strs = ['{"name":"%s", "url":"%s", "type":"%s"}'%(name.rstrip().decode('utf-8'),
                                                               data[name.rstrip()],
                                                               args.type)
                     for name in namelist]

        output = '[%s\n]'%(',\n'.join(oput_strs))
        if args.outfile is not None:
            with open(args.outfile, 'w') as ofile:
                ofile.write(output)
        else:
            print output
    

if __name__ == "__main__":
    main(parse_args(sys.argv[1:]))
