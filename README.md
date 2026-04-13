 string normalDrive = drive.Trim().TrimEnd('/').TrimEnd('\');
 // Extract relative path after the drive root (e.g. D:// → DMSDocuments/...)
 string relativePath = dbPath;
 // Remove any leading drive pattern like X:// or X:/
 relativePath = System.Text.RegularExpressions.Regex.Replace(
     relativePath, @"^[A-Za-z]:[/\]+", "");
 // Normalize slashes
 relativePath = relativePath.Replace('/', System.IO.Path.DirectorySeparatorChar)
                            .TrimEnd(System.IO.Path.DirectorySeparatorChar);
 string fullDir = normalDrive.Replace("//", ":").Replace("/", "\") + "\" + relativePath;
 string fullPath = System.IO.Path.Combine(fullDir, sysName);
 if (System.IO.File.Exists(fullPath))
 {
     foundFiles.Add(fullPath);
     found = true;
     break;
 }
