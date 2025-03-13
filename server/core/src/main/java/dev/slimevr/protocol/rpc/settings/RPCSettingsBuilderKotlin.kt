package dev.slimevr.protocol.rpc.settings

import com.google.flatbuffers.FlatBufferBuilder
import dev.slimevr.config.StayAlignedConfig
import solarxr_protocol.rpc.StayAlignedSettings

object RPCSettingsBuilderKotlin {

	fun createStayAlignedSettings(
		fbb: FlatBufferBuilder,
		config: StayAlignedConfig,
	): Int =
		StayAlignedSettings
			.createStayAlignedSettings(
				fbb,
				config.enabled,
				config.extraYawCorrection,
				config.hideYawCorrection,
				config.standingRelaxedPose.upperLegAngleInDeg,
				config.standingRelaxedPose.lowerLegAngleInDeg,
				config.standingRelaxedPose.footAngleInDeg,
				config.sittingRelaxedPose.upperLegAngleInDeg,
				config.sittingRelaxedPose.lowerLegAngleInDeg,
				config.sittingRelaxedPose.footAngleInDeg,
				config.flatRelaxedPose.upperLegAngleInDeg,
				config.flatRelaxedPose.lowerLegAngleInDeg,
				config.flatRelaxedPose.footAngleInDeg,
			)
}
