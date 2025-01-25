from paperscraper.pubmed import get_and_dump_pubmed_papers

import sys
import re
import json
import os
import shutil

original_query = sys.argv[1]
result_folder = os.path.join(os.getcwd(), 'build', 'python-scrapping', 'results') 
# result_folder = os.path.join('.', 'results') # use this line to execute this script directly

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
    # print("python->query", query)
    # split query using any of the stop_words
    splitted_query = split_text_by_words(query, stop_words)
    sanitized_query = []
    for chunk in splitted_query:
        if len(chunk.split()) <= 1:
            continue
        sanitized_query += [chunk.strip()]
    # print(sanitized_query)
    return sanitized_query

def get_files_in_folder(folder_path):
    try:
        return os.listdir(folder_path)
    except OSError as e:
        print(f"Error: {e}")
        return []

def clean_json_files(folder_path):
    # remove folder and its files
    if os.path.exists(result_folder):
        shutil.rmtree(folder_path)
    return

def create_result_folder():
    if not os.path.exists(result_folder):
        os.makedirs(result_folder)

def process_results():
    scores = []
    print("python->process_results")
    print(result_folder)
    files = get_files_in_folder(result_folder)
    print("files", files)

    for file_name in files:
        data = []
        print("open:" + result_folder + '\\' + file_name)
        try:
            with open(result_folder + '\\' + file_name, 'r') as file: # TODO: use os-independent path
                for line in file:
                    data += [json.loads(line)]
        except FileNotFoundError:
            print(f"File '{file_name}' not found.")
        # print(len(data))
        # search for matches and give a score from 0 (none) to 1 (all)
        print("len(data)", len(data))
        for line in data:
            match_count = 0
            for chunk in processed_query:
                if line['abstract'] is not None and line['abstract'].find(chunk) != -1:
                    match_count += 1
            if match_count > 0:
                source = "https://doi.org/" + line['doi'] if line['doi'] is not None else ""
                scores += [{
                    'text': line['abstract'],
                    'source': source,
                    'percentage': int((match_count / len(processed_query)) * 100)
                }]
    # sort by score
    sorted_scores = sorted(scores, key=lambda x: x['percentage'], reverse=True)
    # return only the top 10 elements of sorted_scores list
    print("sorted_scores", len(sorted_scores)) 
    try:
        top_10_scores = sorted_scores[:10]
    except Exception:
        print("error")
    return top_10_scores
        
def search_pubmed(query):
    # split the query in parts (maybe stripping not important words)
    # and doing multiple queries so we can match titles
    # then do search using abstracts
    # this function is not returning anything because the final product is a list of jsonl files in /results
    count = 0
    for chunk in query:   
        print('querying for: ', chunk)
        create_result_folder()
        get_and_dump_pubmed_papers([chunk.strip()], os.path.join(os.getcwd(), 'build', 'python-scrapping', 'results', 'results' + str(count) + '.jsonl'), ["title", "date", "abstract", "doi"], "2020-01-01")
        # an alternative is to use the get_pubmed_papers function, but it returns a panda dataframe...
        # get_pubmed_papers([chunk.strip()], ["title", "date", "abstract"], 10)
        count += 1

# search_pubmed(final_query)
processed_query = process_query(original_query)
search_pubmed(processed_query)

# print final results. They will be captured from the stderr
# we are avoiding stdout because paperscraper prints to it by default
print(json.dumps(process_results()), file=sys.stderr)

# remove jsonl after every search
clean_json_files(result_folder)


# ! TODO (improvements):
# !!!!!! SOLVE THE ISSUE WITH THE PYTHON VERSION AND PAPERSCRAPER
# when you install a python package, it is installed in the python version of the system

# cut source link space so it won't take up more than 1 line
# Add short description in the UI about what the app does.
# improve UI (make it look better)
# exact match checkbox in the UI
# optimize serching time
    # reduce number of chunks
    # implement some type of cache
# make simple adding or removing new data sources
# give status feedback (easy: using polling, hard: using websockets)
# Hightlight the matching chunks in the abstract (in the result list)
# When clicking on the source, highlight the text in the source
# Assess the performance of NodeJS in this use case, and how its single-threaded architecture might impact the performance
# implementing fuzzy-logic (with N-gram) for searching for similar text
# add support for collapsing results (in the UI)

# TODO: example queries, to be removed
# query = 'The body mass index was first described almost 200 years ago' # fast
# query2 = 'low-grade chronic inflammation' # not so fast
# query3 = 'Overweight and obesity (OWO) are linked to dyslipidemia and low-grade chronic inflammation' # gives a mix of 100% and 50% results
# query4 = 'Severe obesity is associated with a low-grade chronic inflammation, and high-sensitivity C-reactive protein (hs-CRP) is a marker that can be used to evaluate chronic inflammation status. Metabolic bariatric surgery (MBS) is shown to decrease hs-CRP level, but long-term results are scarce, and association with weight loss outcomes is undetermined.' # slow
