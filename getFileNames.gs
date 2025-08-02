function getFileNames() {
  const kSheetName = "File Names";
  const kFirstDataRow = 4;
  const kDataColumns = 4;

  const kLastUpdatedCell = "B1";

  const kMimeTypes = ["image/jpeg", "image/png", "image/gif", "image/bmp", "application/pdf"];


  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(kSheetName);
  if (sheet == null)
    throw ("Couldn't find sheet named: " + kSheetName);

  // Wipe out any existing data
  sheet.getRange(kFirstDataRow, 1, sheet.getMaxRows(), kDataColumns).clearContent();
  sheet.getRange(kLastUpdatedCell).clearContent();
  SpreadsheetApp.flush();



  const folder = DriveApp.getFolderById('1rA1JfpTmLsS68hx1TALNZ22LbFKc5yFg')
  function listFilesinFolder(folder) {
    const files = folder.getFiles()
    const data = [];

    while (files.hasNext()) {

      let file = files.next();
      let mimeType = file.getMimeType();
      if (kMimeTypes.includes(mimeType)) {
        data.push([
          file.getName(),
          file.getUrl(),
          file.getMimeType(),
          file.getLastUpdated(),
        ]);

        
      }
    }
    const subfolders = folder.getFolders();
    while (subfolders.hasNext()) {
      const sub = subfolders.next();
      const subData = listFilesinFolder(sub);
      data.push(...subData);
    }
    return data;
  }
  const data = listFilesinFolder(folder);

  // Set new data
  if (data.length > 0)
    sheet.getRange(kFirstDataRow, 1, data.length, kDataColumns).setValues(data);
  else
    sheet.getRange(kFirstDataRow, 3).setValue("No match")

  // Set last updated date/time
  sheet.getRange(kLastUpdatedCell).setValue(new Date());
}



