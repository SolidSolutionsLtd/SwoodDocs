import React, { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ScrollToSection from './helper/ScrollToSection'
import { Layout } from './layout/Layout'
import { PageNotFound } from './pages/PageNotFound'
import { Sandbox } from './pages/Sandbox'

// Lazy load components
const Home = React.lazy(() => import('./pages/Home').then(module => ({ default: module.Home })))
const SwoodPerformance = React.lazy(() => import('./pages/SwoodPerformance').then(module => ({ default: module.SwoodPerformance })))
const SwoodCompatibility = React.lazy(() => import('./pages/SwoodCompatibility').then(module => ({ default: module.SwoodCompatibility })))
const ScriptParameters = React.lazy(() => import('./pages/ScriptParameters').then(module => ({ default: module.ScriptParameters })))
const SwoodTab = React.lazy(() => import('./pages/SwoodTab').then(module => ({ default: module.SwoodTab })))
const FileName = React.lazy(() => import('./pages/FileName').then(module => ({ default: module.FileName })))
const SwoodReportQuickstart = React.lazy(() => import('./pages/SwoodReportQuickStart').then(module => ({ default: module.SwoodReportQuickstart })))
const SwoodLicensing = React.lazy(() => import('./pages/SwoodLicensing').then(module => ({ default: module.SwoodLicensing })))
const ReportCompatibility = React.lazy(() => import('./pages/ReportCompatibility').then(module => ({ default: module.ReportCompatibility })))
const SwoodDataDirectory = React.lazy(() => import('./pages/SwoodDataDirectory').then(module => ({ default: module.SwoodDataDirectory })))
const Matrix = React.lazy(() => import('./pages/Matrix').then(module => ({ default: module.Matrix })))
const SwoodProperties = React.lazy(() => import('./pages/SwoodProperties').then(module => ({ default: module.SwoodProperties })))
const MaterialExtendedProperties = React.lazy(() => import('./pages/MaterialExtendedProperties').then(module => ({ default: module.MaterialExtendedProperties })))
const CustomProperties = React.lazy(() => import('./pages/CustomProperties').then(module => ({ default: module.CustomProperties })))
const ConcatenateProperties = React.lazy(() => import('./pages/ConcatenateProperties').then(module => ({ default: module.ConcatenateProperties })))
const Frames = React.lazy(() => import('./pages/Frames').then(module => ({ default: module.Frames })))
const CuttingPattern = React.lazy(() => import('./pages/CuttingPattern').then(module => ({ default: module.CuttingPattern })))
const NestedCuttingPattern = React.lazy(() => import('./pages/NestedCuttingPattern').then(module => ({ default: module.NestedCuttingPattern })))
const Hardware = React.lazy(() => import('./pages/Hardware').then(module => ({ default: module.Hardware })))
const HardwareLength = React.lazy(() => import('./pages/HardwareLength').then(module => ({ default: module.HardwareLength })))
const HardwareType = React.lazy(() => import('./pages/HardwareType').then(module => ({ default: module.HardwareType })))
const BeamSaw = React.lazy(() => import('./pages/BeamSaw').then(module => ({ default: module.BeamSaw })))
const SaveToPDF = React.lazy(() => import('./pages/SaveToPDF').then(module => ({ default: module.SaveToPDF })))
const Exclude = React.lazy(() => import('./pages/Exclude').then(module => ({ default: module.Exclude })))
const MaterialType = React.lazy(() => import('./pages/MaterialType').then(module => ({ default: module.MaterialType })))
const SwoodReportReleaseNotes = React.lazy(() => import('./pages/SwoodReportReleaseNotes').then(module => ({ default: module.SwoodReportReleaseNotes })))
const SwoodEditorReleaseNotes = React.lazy(() => import('./pages/SwoodEditorReleaseNotes').then(module => ({ default: module.SwoodEditorReleaseNotes })))
const CreatingDATBackups = React.lazy(() => import('./pages/CreatingDATBackups').then(module => ({ default: module.CreatingDATBackups })))
const SwoodUtils = React.lazy(() => import('./pages/SwoodUtils').then(module => ({ default: module.SwoodUtils })))
const SwoodUtilsReleaseNotes = React.lazy(() => import('./pages/SwoodUtilsReleaseNotes').then(module => ({ default: module.SwoodUtilsReleaseNotes })))

export const App = () => {
	return (
		<BrowserRouter basename="/SwoodDocs">
			<ScrollToSection />
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route element={<Layout />}>
						<Route path="/" element={<Home />} />
						<Route path="/index.html" element={<Home />} />
						<Route path="/SwoodCompatibility" element={<SwoodCompatibility />} />
						<Route path="/SwoodPerformance" element={<SwoodPerformance />} />
						<Route path="/ScriptParameters" element={<ScriptParameters />} />
						<Route path="/SwoodTab" element={<SwoodTab />} />
						<Route path="/FileName" element={<FileName />} />
						<Route path="/SwoodReportQuickstart" element={<SwoodReportQuickstart />} />
						<Route path="/html/SwoodReportQuickstart.html" element={<SwoodReportQuickstart />} />
						<Route path="/SwoodLicensing" element={<SwoodLicensing />} />
						<Route path="/ReportCompatibility" element={<ReportCompatibility />} />
						<Route path="/SwoodDataDirectory" element={<SwoodDataDirectory />} />
						<Route path="/Matrix" element={<Matrix />} />
						<Route path="/SwoodProperties" element={<SwoodProperties />} />
						<Route path="/MaterialExtendedProperties" element={<MaterialExtendedProperties />} />
						<Route path="/CustomProperties" element={<CustomProperties />} />
						<Route path="/ConcatenateProperties" element={<ConcatenateProperties />} />
						<Route path="/Frames" element={<Frames />} />
						<Route path="/CuttingPattern" element={<CuttingPattern />} />
						<Route path="/NestedCuttingPattern" element={<NestedCuttingPattern />} />
						<Route path="/Hardware" element={<Hardware />} />
						<Route path="/HardwareLength" element={<HardwareLength />} />
						<Route path="/HardwareType" element={<HardwareType />} />
						<Route path="/BeamSaw" element={<BeamSaw />} />
						<Route path="/SaveToPDF" element={<SaveToPDF />} />
						<Route path="/Exclude" element={<Exclude />} />
						<Route path="/MaterialType" element={<MaterialType />} />
						<Route path="/SwoodReportReleaseNotes" element={<SwoodReportReleaseNotes />} />
						<Route path="/SwoodEditorReleaseNotes" element={<SwoodEditorReleaseNotes />} />
						<Route path="/CreatingDATBackups" element={<CreatingDATBackups />} />
						<Route path="/SwoodUtils" element={<SwoodUtils />} />
						<Route path="/html/SwoodUtils.html" element={<SwoodUtils />} />
						<Route path="/SwoodUtilsReleaseNotes" element={<SwoodUtilsReleaseNotes />} />
					</Route>
					<Route path="/sandbox" element={<Sandbox />} />
					<Route path="*" element={<PageNotFound />} />
				</Routes>
			</Suspense>
		</BrowserRouter>
	)
}
