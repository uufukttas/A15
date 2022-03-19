// Please update this type as same as with the data shape.
type List = Array<{
  files: Array<{ id: string; name: string }>;
  name: string;
  id: string;
}>;

export default function move(list: List, source: string, destination: string): List {
  let movedItem: any = {};
  let isDataPushed = false;

  list[0].files = list[0].files.filter((item) => {
    if (item.id === source) {
      movedItem = item;
    }

    return item.id !== source;
  });

  if (Object.keys(movedItem).length === 0) {
    throw new Error('You cannot move a folder');
  }

  list.forEach((index) => {
    if (index.id === destination) {
      index.files.push(movedItem);

      isDataPushed = true;
    }
  });

  if (!isDataPushed) {
    throw new Error('You cannot specify a file as the destination');
  }

  return list;
}
