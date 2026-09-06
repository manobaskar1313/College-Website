$committee = @'
<!--Committee-->
<li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
        Committee & Cell
    </a>

    <ul class="dropdown-menu committee-dropdown">
        <li><a class="dropdown-item" href="iqac_committee.html">IQAC Committee</a></li>
        <li><a class="dropdown-item" href="admission_committee.html">Admission Committee</a></li>
        <li><a class="dropdown-item" href="examination_committee.html">Examination Committee</a></li>
        <li><a class="dropdown-item" href="attendence-committee.html">Attendence Committee</a></li>
        <li><a class="dropdown-item" href="discipline_committee.html">Discipline Committee</a></li>
        <li><a class="dropdown-item" href="gymkhana_committee.html">Gymkhana/Sports Commmittee</a></li>
        <li><a class="dropdown-item" href="timetable_committee.html">Time Table Committee</a></li>
        <li><a class="dropdown-item" href="anti_committee.html">Anti-Ragging Committee</a></li>
        <li><a class="dropdown-item" href="cultural_committee.html">Cultural Committee</a></li>
        <li><a class="dropdown-item" href="library_committee.html">Library Committee</a></li>
        <li><a class="dropdown-item" href="research_committee.html">Research Committee</a></li>
        <li><a class="dropdown-item" href="nss_committee.html">NSS Committee</a></li>
        <li><a class="dropdown-item" href="placement_committee.html">Placement Committee</a></li>
        <li><a class="dropdown-item" href="internship_committee.html">Internship Committee</a></li>
        <li><a class="dropdown-item" href="tally-course-committee.html">Tally Course Committee</a></li>
        <li><a class="dropdown-item" href="speakers-forum-committee.html">Speakers' Forum Committee</a></li>
        <li><a class="dropdown-item" href="commerce-forum-committee.html">Commerce Forum (Finance Club)</a></li>
        <li><a class="dropdown-item" href="green-club-committee.html">Green Club Committee</a></li>
        <li><a class="dropdown-item" href="students-counselling-committee.html">Students' Counselling Committee</a></li>
        <li><a class="dropdown-item" href="value-lab-committee.html">Value Lab Committee</a></li>
        <li><a class="dropdown-item" href="bridge-course-committees.html">Bridge Courses Committee</a></li>
        <li><a class="dropdown-item" href="alumni-association-committee.html">Alumni Association & Student Progression</a></li>
        <li><a class="dropdown-item" href="grievance-redressal-committee.html">Grievance Redressal Cell</a></li>
        <li><a class="dropdown-item" href="womens-development.html">Women's Development Cell</a></li>
        <li><a class="dropdown-item" href="website-committee.html">Website Committee / IT - NAAC</a></li>
        <li><a class="dropdown-item" href="design-coding-committee.html">Design and Coding Club</a></li>
        <li><a class="dropdown-item" href="magazine-report-committee.html">Magazine & Report</a></li>
        <li><a class="dropdown-item" href="marathi-vangmay-mandal-committee.html">Marathi Vangmay Mandal</a></li>
        <li><a class="dropdown-item" href="rotaract-club-committee.html">Rotaract Club</a></li>
        <li><a class="dropdown-item" href="special-cell-committee.html">Special Cell for Reserved Category Students & Equal Opportunity Cell / Minority Affairs Committee</a></li>
        <li><a class="dropdown-item" href="condemnation-committee.html">Condemnation Committee</a></li>
        <li><a class="dropdown-item" href="lifelong-learning-commitee.html">Department of Lifelong, Learning, Extension</a></li>
        <li><a class="dropdown-item" href="entrepreneurship-committee.html">Entrepreneurship / Innovation Cell</a></li>
        <li><a class="dropdown-item" href="scholarships-committee.html">Scholarships & Endowment</a></li>
        <li><a class="dropdown-item" href="students-aid-committee.html">Student's Aid Fund & Book Bank Committee</a></li>
        <li><a class="dropdown-item" href="isr-committee.html">Institutional Social Responsibility</a></li>
        <li><a class="dropdown-item" href="media-committee.html">Media Committee</a></li>
    </ul>
</li>
'@

Get-ChildItem -Path . -Filter *.html -File | ForEach-Object {

    $file = $_.FullName
    $content = Get-Content $file -Raw

    if ($content -notmatch 'Committee\s*&\s*Cell') {

        if ($content -match '<!--\s*Events Dropdown\s*-->') {

            $content = $content -replace '(<!--\s*Events Dropdown\s*-->)', "$committee`r`n`$1"

            Set-Content -Path $file -Value $content -Encoding UTF8

            Write-Host "UPDATED: $($_.Name)"
        }
        else {
            Write-Host "SKIPPED - Events marker not found: $($_.Name)"
        }
    }
    else {
        Write-Host "ALREADY EXISTS: $($_.Name)"
    }
}

Write-Host ""
Write-Host "DONE!"
Pause