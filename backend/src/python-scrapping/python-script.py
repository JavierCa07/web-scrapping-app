from paperscraper.pubmed import get_and_dump_pubmed_papers

import sys
import re
import json

# original_query = sys.argv[1]

stop_words = [
    'the',
    'and',
    'in',
    'at',
    'to',
    'of',
    'a',
    'an',
    'on',
    'for',
    'with',
    'by',
    'that',
    'which',
    'or',
    'as',
    'but'
    'if',
    '.'
]

def split_text_by_words(text, words):
    # Create a regex pattern that matches any of the words
    pattern = r'\b(?:' + '|'.join(map(re.escape, words)) + r')\b'
    # Split the text using the pattern
    return re.split(pattern, text) 

def process_query(query):
    print("python->query", query)
    # split query using any of the stop_words
    splitted_query = split_text_by_words(query, stop_words)
    print(splitted_query)
    return splitted_query

def process_results():
    # load results from json files
    data = json.load(open('results0.jsonl')) # TODO: load all files
    print(len(data))
    processed_query = process_query(original_query)
    # easy approach: exact match of every chunk in query
    # difficult approach: fuzzy search using N-gram


def search_pubmed(query):
    # TODO
    # one way would be to split the query in parts (maybe stripping not important words)
    # and doing multiple queries so we can match titles
    # then do fuzzy search using abstracts

    # example
    # with this query 'The body mass index was first described almost 200 years ago'
    # split it in "body mass index" and "first described 200 years ago"
    # this may be an example of N-gram algorithm. Research about this.
    count = 0
    for chunk in query:   
        print('querying for: ', chunk)
        # ignore 0 or 1 word chunks
        if len(chunk.split()) <= 1:
            print('->ignoring')
            continue
        get_and_dump_pubmed_papers([chunk.strip()], output_filepath='results/results' + str(count) + '.jsonl')
        count += 1

# example queries, to be removed
query = 'The body mass index was first described almost 200 years ago'
query2 = 'Severe obesity is associated with a low-grade chronic inflammation, and high-sensitivity C-reactive protein (hs-CRP) is a marker that can be used to evaluate chronic inflammation status. Metabolic bariatric surgery (MBS) is shown to decrease hs-CRP level, but long-term results are scarce, and association with weight loss outcomes is undetermined.'
final_query = ['Severe obesity is associated', 'low-grade chronic inflammation,', 'high-sensitivity C-reactive protein (hs-CRP) is', 'marker', 'can be used to evaluate chronic inflammation status', 'Metabolic bariatric surgery (MBS) is shown', 'decrease hs-CRP level', 'long-term results are scarce', 'association', 'weight loss outcomes is undetermined']

# split query by period
# split again by stop words
# The resulting example query would be:
# search_pubmed(final_query)
# search_pubmed(process_query(original_query))
search_pubmed(process_query(query))
print("Processing results...")

# TODO: uncomment this to continue
# process_results()
# Given the result files and the original query perform a fuzzy search operation
# 1. iterate through json lines in every file
# 2. perform a fuzzy search of every query chunk over the paper abstract using N-gram algorithm
# 3. every chunk search results in a score and an average is calculated from all searches for that paper
# 4. at the end, all scores are sorted from high to low and the top 10 is returned

