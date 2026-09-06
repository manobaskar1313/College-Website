$staff = @'
<li class="dropdown">
    <a class="dropdown-item dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
        Staff
    </a>
    <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="degree-college.html">Degree College</a></li>
        <li><a class="dropdown-item" href="non_teaching_staff.html">Non-Teaching Staff</a></li>
    </ul>
</li>
'@

Get-ChildItem -Path . -Filter *.html -File | ForEach-Object {

    $file = $_.FullName
    $content = Get-Content $file -Raw

    # Remove the separate Staff dropdown
    $content = $content -replace '(?s)\s*<!-- Staff Dropdown -->\s*<li class="nav-item dropdown">\s*<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">\s*Staff\s*</a>\s*<ul class="dropdown-menu">\s*<li><a class="dropdown-item" href="degree-college\.html">Degree College</a></li>\s*<li><a class="dropdown-item" href="non_teaching_staff\.html">Non-Teaching Staff</a></li>\s*</ul>\s*</li>', ''

    # Add Staff inside About Us if it is not already there
    if ($content -notmatch 'class="dropdown-item dropdown-toggle"[^>]*>\s*Staff\s*</a>') {

        $pattern = '(<li><a class="dropdown-item" href="administration\.html">Administration</a></li>)'

        if ($content -match $pattern) {
            $content = $content -replace $pattern, "`$1`r`n$staff"
            Set-Content -Path $file -Value $content -Encoding UTF8
            Write-Host "UPDATED: $($_.Name)"
        }
        else {
            Write-Host "SKIPPED - Administration not found: $($_.Name)"
        }
    }
    else {
        Set-Content -Path $file -Value $content -Encoding UTF8
        Write-Host "CHECKED: $($_.Name)"
    }
}

Write-Host ""
Write-Host "STAFF UPDATE COMPLETED!"
Pause