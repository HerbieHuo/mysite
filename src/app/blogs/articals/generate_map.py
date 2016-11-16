import os
import datetime, time
import json
import hashlib

# print(__file__)
# print(os.path.abspath(__file__))
# print(os.path.dirname(os.path.abspath(__file__)))

ARTICAL_DIR = os.path.dirname(os.path.abspath(__file__))
BASE_URI = "app/blogs/articals/"
AUTHOR = "herbie huo"
VERSION = "1.0.0"

class CJsonEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, datetime.datetime):
            return obj.strftime('%Y-%m-%d %H:%M:%S')
        elif isinstance(obj, datetime.date):
            return obj.strftime('%Y-%m-%d')
        elif isinstance(obj, decimal.Decimal):
            return str(obj)
        else:
            return json.JSONEncoder.default(self, obj)

def GetArticalsInfo(dirName):
    category = {
        "category_name": os.path.basename(dirName),
        "directory": os.path.basename(dirName),
        "articals":[]
    }
    for fileName in os.listdir(dirName):
        fullFileName = os.path.join(dirName, fileName)
        if os.path.isfile(fullFileName):
            fileStat = os.stat(fullFileName)
            # print(fileStat.st_mtime, fileStat.st_ctime)
            md5 = ""
            with open(fullFileName) as f:
                md5obj = hashlib.md5()
                md5obj.update(f.read().encode())
                md5 = md5obj.hexdigest()
            artical = {
                "name": fileName,
                "relative_url": os.path.basename(dirName)+"/",
                "hash": "",
                "md5": md5,
                "create_time": datetime.datetime.fromtimestamp(fileStat.st_ctime),
                "update_time": datetime.datetime.fromtimestamp(fileStat.st_mtime)
            }
            category["articals"].append(artical)
    return category

def main():
    blogsMap = {
        "version": "1.0.0",
        "author": "herbie huo",
        "base_url": "app/blogs/articals/",
        "categorys": []
    }
    for dirName in os.listdir(ARTICAL_DIR):
        fullDirName = os.path.join(ARTICAL_DIR, dirName)
        if os.path.isdir(fullDirName):
            category = GetArticalsInfo(fullDirName)
            blogsMap["categorys"].append(category)
    # s = json.dumps(blogsMap, indent=4, cls=CJsonEncoder)
    with open(os.path.join(ARTICAL_DIR,"map.json"), 'w') as f:
        f.write(json.dumps(blogsMap, cls=CJsonEncoder))
    with open(os.path.join(ARTICAL_DIR,"map_humanity.json"), 'w') as f:
        f.write(json.dumps(blogsMap, indent=4, cls=CJsonEncoder))
    # print(s)
    print("finish")

if __name__ == "__main__":
    main()

