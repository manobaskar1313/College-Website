# Fix broken dash encoding in all HTML files

Get-ChildItem -Path . -Filter *.html -File -Recurse | ForEach-Object {

    $file = $_.FullName

    # Read HTML file as UTF-8
    $content = [System.IO.File]::ReadAllText($file, [System.Text.Encoding]::UTF8)

    # Build the broken "â€“" text using character codes
    $badText = [string]::Concat(
        [char]0x00E2,
        [char]0x20AC,
        [char]0x201C
    )

    # Replace broken dash with normal hyphen
    $newContent = $content.Replace($badText, '-')

    if ($newContent -ne $content) {

        [System.IO.File]::WriteAllText(
            $file,
            $newContent,
            [System.Text.UTF8Encoding]::new($false)
        )

        Write-Host "FIXED: $($_.FullName)"
    }
    else {

        Write-Host "CHECKED: $($_.FullName)"
    }
}

Write-Host ""
Write-Host "ENCODING FIX COMPLETED!"
Pause