$scholarship = '                                <li><a class="dropdown-item" href="scholarships.html">Scholarships</a></li>'

Get-ChildItem -Path . -Filter *.html -File | ForEach-Object {

    $file = $_.FullName
    $content = Get-Content $file -Raw

    # Remove the complete Welfare Schemes dropdown
    $content = $content -replace '(?s)\s*<!-- Welfare Schemes Dropdown -->\s*<li class="nav-item dropdown">\s*<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">\s*Welfare Schemes\s*</a>\s*<ul class="dropdown-menu">.*?</ul>\s*</li>', ''

    # Add Scholarships inside Academics after Policy & Procedure
    if ($content -notmatch 'href="scholarships\.html">\s*Scholarships') {

        $pattern = '(<li><a class="dropdown-item" href="policy_procedures\.html">Policy & Procedure</a></li>)'

        if ($content -match $pattern) {

            $content = $content -replace $pattern, "`$1`r`n$scholarship"

            Set-Content -Path $file -Value $content -Encoding UTF8

            Write-Host "UPDATED: $($_.Name)"
        }
        else {
            Write-Host "SKIPPED - Academics section not found: $($_.Name)"
        }
    }
    else {
        Set-Content -Path $file -Value $content -Encoding UTF8
        Write-Host "CHECKED: $($_.Name)"
    }
}

Write-Host ""
Write-Host "SCHOLARSHIP UPDATE COMPLETED!"
Pause